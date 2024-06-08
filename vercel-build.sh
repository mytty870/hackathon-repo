#!/bin/bash
# Install dependencies
npm install
# Generate Prisma Client
npx prisma generate
# Build the project
npm run build