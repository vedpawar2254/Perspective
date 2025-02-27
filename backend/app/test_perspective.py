import os
import sys
import json
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app.services.ai_service import AIService

def test_opposite_perspective():
    api_key = os.environ.get('HF_API_KEY', None)  #set this as an environment variable
    ai_service = AIService(api_key=api_key)
    
    print("=" * 80)
    print("OPPOSITE PERSPECTIVE GENERATOR")
    print("=" * 80)
    print("Enter or paste the article text (press Enter twice when done):")
    
    lines = []
    while True:
        line = input()
        if not line:
            break
        lines.append(line)
    
    article_text = "\n".join(lines)
    
    print("\nGenerating comprehensive opposite perspective...\n")
    # Get the opposite perspective
    result = ai_service.get_opposite_perspective(article_text)
    
    # Print the result in a user-friendly format
    print("\n" + "=" * 80)
    print("ANALYSIS RESULTS")
    print("=" * 80)
    
    if "error" in result:
        print(f"Error: {result['error']}")
        if "raw_response" in result:
            print("\nRaw response:")
            print(result["raw_response"])
        return
    
    # Print original perspective
    print("\n📝 ORIGINAL ARTICLE ANALYSIS")
    print("-" * 50)
    
    print("\n🔑 Core Claims:")
    for i, claim in enumerate(result["original_perspective"]["core_claims"], 1):
        print(f"  {i}. {claim}")
    
    print("\n🔍 Underlying Assumptions:")
    for i, assumption in enumerate(result["original_perspective"]["underlying_assumptions"], 1):
        print(f"  {i}. {assumption}")
    
    # Print opposite perspective
    print("\n\n🔄 OPPOSITE PERSPECTIVE")
    print("-" * 50)
    
    print(f"\n📌 Alternative View:\n  {result['opposite_perspective']['alternative_view']}")
    
    print("\n⚡ Counterarguments:")
    for i, counter in enumerate(result["opposite_perspective"]["counterarguments"], 1):
        print(f"  {i}. {counter}")
    
    print("\n📊 Supporting Evidence:")
    for i, evidence in enumerate(result["opposite_perspective"]["supporting_evidence"], 1):
        print(f"  {i}. {evidence}")
    
    print("\n⚖️ Different Priorities:")
    for i, priority in enumerate(result["opposite_perspective"]["different_priorities"], 1):
        print(f"  {i}. {priority}")
    
    print("\n\n🧠 Analysis Process:")
    print(f"  {result['analysis_process']}")
    
    print("\n" + "=" * 80)
    save = input("\nWould you like to save the results to a file? (y/n): ")
    if save.lower() == 'y':
        filename = input("Enter filename (default: perspective_analysis.json): ") or "perspective_analysis.json"
        with open(filename, 'w') as f:
            json.dump(result, f, indent=2)
        print(f"Results saved to {filename}")

if __name__ == "__main__":
    test_opposite_perspective()