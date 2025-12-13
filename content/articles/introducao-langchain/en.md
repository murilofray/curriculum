# What is LangChain?

LangChain is an open-source framework for developing applications based on Large Language Models (LLMs). It provides abstractions and components that facilitate the creation of complex AI systems.

## Why use LangChain?

- **Powerful abstractions**: Simplifies integration with different LLMs
- **Reusable components**: Chains, agents, memory, etc.
- **Rich ecosystem**: Integrations with various tools and APIs

## Installation

```bash
pip install langchain langchain-openai
```

## First example

```python
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

llm = ChatOpenAI(model="gpt-4")
prompt = ChatPromptTemplate.from_template("Explain {topic} in simple terms.")

chain = prompt | llm
response = chain.invoke({"topic": "machine learning"})
print(response.content)
```

## Next steps

- Explore the concept of **Chains** to create pipelines
- Learn about **Agents** to give autonomy to LLMs
- Implement **Memory** for contextual conversations
