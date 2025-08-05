FROM python:3.11-slim

ENV PYTHONUNBUFFERED=1

# Install pip requirements
COPY requirements.txt .
RUN python -m pip install -r requirements.txt

# Set working directory
WORKDIR /app
COPY . /app

# Set PYTHONPATH so Python can find the BE module
ENV PYTHONPATH="/app"

# Create non-root user
RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

# Start FastAPI app using gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8001", "-k", "uvicorn.workers.UvicornWorker", "BE.API1.main:app"]
