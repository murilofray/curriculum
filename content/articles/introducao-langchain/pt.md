# O que é LangChain?

LangChain é um framework open-source para desenvolvimento de aplicações baseadas em Large Language Models (LLMs). Ele fornece abstrações e componentes que facilitam a criação de sistemas complexos de IA.

## Por que usar LangChain?

- **Abstrações poderosas**: Simplifica a integração com diferentes LLMs
- **Componentes reutilizáveis**: Chains, agents, memory, etc.
- **Ecossistema rico**: Integrações com diversas ferramentas e APIs

## Instalação

```bash
pip install langchain langchain-openai
```

## Primeiro exemplo

```python
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

llm = ChatOpenAI(model="gpt-4")
prompt = ChatPromptTemplate.from_template("Explique {topic} em termos simples.")

chain = prompt | llm
response = chain.invoke({"topic": "machine learning"})
print(response.content)
```

## Próximos passos

- Explore o conceito de **Chains** para criar pipelines
- Aprenda sobre **Agents** para dar autonomia aos LLMs
- Implemente **Memory** para conversas contextuais
