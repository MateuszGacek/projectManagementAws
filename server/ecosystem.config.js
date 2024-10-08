module.exports = {
  apps: [
    {
      name: "project-management-aws",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
