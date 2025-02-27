import json
import requests
import os
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

# Use absolute imports instead
from app.prompts.opposite_perspective import get_opposite_perspective_prompt

class AIService:
    def __init__(self, api_key=None):
        self.api_key = api_key
        self.model_id = "mistralai/Mistral-7B-Instruct-v0.2"
        #self.model_id = "google/gemma-2-27b"
        self.api_url = f"https://api-inference.huggingface.co/models/{self.model_id}"
        self.headers = {"Authorization": f"Bearer {self.api_key}"} if api_key else {}

    def clean_article_text(self, article_text):
        """Clean the article text by removing extra whitespace, normalizing quotes, etc."""
        if not article_text:
            return ""
        
        cleaned = article_text.strip()
        cleaned = '\n'.join(line for line in cleaned.splitlines() if line.strip())
        return cleaned

    def get_opposite_perspective(self, article_text):
        #Generate an opposite perspective
        prompt_template = get_opposite_perspective_prompt()
        cleaned_text = self.clean_article_text(article_text)
        formatted_prompt = prompt_template.format(article_text=cleaned_text)
        
        try:
            print("Sending request to Hugging Face API...")
            payload = {
                "inputs": formatted_prompt,
                "parameters": {
                    "max_new_tokens": 2500,  # Increased for more detailed response
                    "temperature": 0.7,
                    "return_full_text": False
                }
            }
            
            response = requests.post(self.api_url, headers=self.headers, json=payload)
            if response.status_code != 200:
                return {"error": f"API Error: {response.status_code}", "details": response.text}
            
            print("Response received from API, parsing result...")
            return self._parse_llm_response(response.json())
        except Exception as e:
            return {"error": str(e)}
    
    def _parse_llm_response(self, response):
        """Parse the LLM response and extract the JSON part"""
        try:
            if isinstance(response, list) and len(response) > 0:
                text = response[0].get('generated_text', '')
            elif isinstance(response, dict):
                text = response.get('generated_text', '')
            else:
                text = str(response)
            # Extract the JSON part
            json_start = text.find('{')
            json_end = text.rfind('}') + 1
            
            if json_start >= 0 and json_end > json_start:
                json_str = text[json_start:json_end]
                return json.loads(json_str)
            
            return {"error": "Could not extract JSON from response", "raw_response": text}
        except Exception as e:
            return {"error": str(e), "raw_response": text if 'text' in locals() else response}
    