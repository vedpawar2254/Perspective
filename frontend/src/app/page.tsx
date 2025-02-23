

'use client';

import { useRouter } from 'next/navigation';
import { Search, ArrowRight } from 'lucide-react';
import { Container, TextField, Button, Typography, Card, CardContent, Box, Stack } from '@mui/material';
import Navbar from '@/app/components/Navbar';
import AnalyzeButton from '@/app/components/Utils/AnalyzeButton';
import DescCard from '@/app/components/Utils/DescCard';
import SearchButton from '@/app/components/Utils/SearchButton';
//import Particles from '@/app/components/Utils/Background';

export default function Home() {
  const router = useRouter();

  const handleSubmit = () => {
    console.log("hi");
    router.push('/article');
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {/* <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        /> */}
      </Box>
      <Box sx={{ bgcolor: '#111827', color: 'white', minHeight: '100vh' }}>
        <Navbar />
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              fontWeight="bold"
              gutterBottom
              sx={{
                background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
              }}
            >
              Discover Different Perspectives
            </Typography>
            <Typography variant="h6" sx={{ color: 'white', maxWidth: '600px', mx: 'auto' }}>
              Enter an article URL to analyze multiple viewpoints and engage in meaningful discussions.
            </Typography>
          </Box>

          <Box maxWidth="sm" mx="auto" mb={8}>
            <SearchButton />
            <div className="justifyContent mt-2" style={{ justifyContent: 'center', display: 'flex' }} onClick={handleSubmit}>
            <AnalyzeButton />
          </div>
          </Box>

          <Stack spacing={4} direction={{ xs: 'column', md: 'row' }} justifyContent="center" alignItems="center">
            {[
              { title: 'Multiple Perspectives', description: 'Get diverse viewpoints on any topic from various reliable sources.' },
              { title: 'AI-Powered Analysis', description: 'Advanced AI algorithms analyze and summarize different opinions.' },
              { title: 'Interactive Discussion', description: 'Engage in meaningful conversations about the content.' },
            ].map((feature, index) => (
              <DescCard key={index} title={feature.title} description={feature.description} />
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}


// 'use client';

// import { useRouter } from 'next/navigation';
// import { Search, ArrowRight } from 'lucide-react';
// import { Container, TextField, Button, Typography, Card, CardContent, Box, Stack } from '@mui/material';
// import { useState } from 'react';
// import Navbar from '@/app/components/Navbar';
// import AnalyzeButton from '@/app/components/Utils/AnalyzeButton';
// import DescCard from '@/app/components/Utils/DescCard';
// import SearchButton from '@/app/components/Utils/SearchButton';

// export default function Home() {
//   const router = useRouter();
//   const [url, setUrl] = useState('');

//   const handleSubmit = () => {
//     //e.preventDefault(); // Prevent default form submission
//     if (url.trim()) { // Only redirect if URL is not empty
//       router.push(`/article?url=${encodeURIComponent(url)}`);
//     }
//   };

//   return (
//     <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           zIndex: 0,
//           pointerEvents: 'none',
//         }}
//       >
//       </Box>
//       <Box sx={{ bgcolor: '#111827', color: 'white', minHeight: '100vh' }}>
//         <Navbar />
//         <Container maxWidth="lg" sx={{ py: 8 }}>
//           <Box textAlign="center" mb={6}>
//             <Typography
//               variant="h2"
//               fontWeight="bold"
//               gutterBottom
//               sx={{
//                 background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
//               }}
//             >
//               Discover Different Perspectives
//             </Typography>
//             <Typography variant="h6" sx={{ color: 'white', maxWidth: '600px', mx: 'auto' }}>
//               Enter an article URL to analyze multiple viewpoints and engage in meaningful discussions.
//             </Typography>
//           </Box>

//           <Box 
//             component="form" 
//             maxWidth="sm" 
//             mx="auto" 
//             mb={8}
//             onSubmit={handleSubmit}
//           >
//             <SearchButton value={url} onChange={() => setUrl()} />
//             <Box display="flex" justifyContent="center" mt={2}>
//               <AnalyzeButton type="submit" />
//             </Box>
//           </Box>

//           <Stack spacing={4} direction={{ xs: 'column', md: 'row' }} justifyContent="center" alignItems="stretch">
//             {[
//               { title: 'Multiple Perspectives', description: 'Get diverse viewpoints on any topic from various reliable sources.' },
//               { title: 'AI-Powered Analysis', description: 'Advanced AI algorithms analyze and summarize different opinions.' },
//               { title: 'Interactive Discussion', description: 'Engage in meaningful conversations about the content.' },
//             ].map((feature, index) => (
//               <DescCard key={index} title={feature.title} description={feature.description} />
//             ))}
//           </Stack>
//         </Container>
//       </Box>
//     </Box>
//   );
// }