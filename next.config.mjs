/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  env: {
    SUPABASEURL: "https://bpjxqncbcalwtotzipbf.supabase.co",
    SUPABASEANONKEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwanhxbmNiY2Fsd3RvdHppcGJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2MDU3MjIsImV4cCI6MjAzMDE4MTcyMn0.ikG_cC7LTiCHF4zIkN2mIYg3f2NccEhmEjkCgiqTgS4",
    DB_HOST: "aws-0-ap-south-1.pooler.supabase.com",
    DB_USER: "postgres.bpjxqncbcalwtotzipbf",
    DB_PASS: "OEgop4PLWRWb1qLR",
    DB_PORT: 5432,
    DB_NAME: "postgres",
  },
};

export default nextConfig;
