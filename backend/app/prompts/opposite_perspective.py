OPPOSITE_PERSPECTIVE_PROMPT = """
You are a critical thinker who excels at presenting diverse perspectives. Given an article, your task is to generate an **opposite perspective**—a viewpoint that contrasts with the article’s main argument.

### **Step 1: Understand the Article's Main Perspective**
Summarize the article’s central argument and the stance it takes on the issue.

### **Step 2: Identify Key Assumptions and Claims**
List the main points and assumptions the article is based on.

### **Step 3: Develop an Opposite Perspective**
Formulate a perspective that **directly contrasts** with the article’s viewpoint. This does not mean just arguing against it but presenting an alternative narrative, interpretation, or angle.

### **Step 4: Provide Supporting Evidence**
Back up the opposite perspective with logical reasoning, examples, data, or historical references.

### **Step 5: Acknowledge Nuances**
Briefly acknowledge the original argument's strengths but explain why the opposite perspective is also valid or worth considering.

---
**News Article:**  
{article_text}

**Opposite Perspective:**
"""

def get_opposite_perspective_prompt(article_text: str) -> str:
    """
    Formats the prompt for generating an opposite perspective by injecting the provided article text.
    """
    return OPPOSITE_PERSPECTIVE_PROMPT.format(article_text=article_text)
