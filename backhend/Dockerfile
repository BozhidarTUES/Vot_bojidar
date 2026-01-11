FROM python:3.11-slim

WORKDIR /app

COPY deps.txt .

RUN pip install --no-cache-dir -r deps.txt

COPY app.py .

EXPOSE 5000

CMD ["python", "app.py"]
