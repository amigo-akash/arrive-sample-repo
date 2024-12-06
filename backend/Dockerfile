# Start with a lightweight base image
FROM alpine:latest

# Set a maintainer label (optional but recommended)
LABEL maintainer="akash.acharya@tweeny.in"

# Update package manager and install tools
RUN apk update && apk add --no-cache \
    curl \
    git \
    vim

# Set default command (optional)
CMD ["sh"]