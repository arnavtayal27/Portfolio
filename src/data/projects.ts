export const caseStudies = [
  {
    slug: "cloud-cost-intelligence",
    title: "Cloud Cost Intelligence Platform",
    technologies: ["AWS Lambda", "Amazon EventBridge", "AWS Cost Explorer", "AWS Budgets", "Amazon SES"],
    story: "Manual billing tracking → Automated cost intelligence → Cost visibility → Proactive alerts",
    problem: "Manual cost tracking and visibility.",
    architecture: "Serverless architecture for cost reporting.",
    impact: "Automated AWS cost reporting and proactive spend visibility."
  },
  {
    slug: "kubernetes-secrets-modernization",
    title: "Kubernetes Secrets Modernization",
    technologies: ["Azure Key Vault", "External Secrets Operator", "Argo CD", "Kubernetes"],
    story: "Manual secret handling → Centralized secret management → External Secrets → GitOps → Kubernetes",
    problem: "Security concerns with manual secret handling.",
    impact: "Centralized secret management and GitOps integration."
  },
  {
    slug: "cicd-automation",
    title: "CI/CD Automation",
    technologies: ["GitHub Actions", "Docker", "AWS ECR"],
    story: "Code → GitHub Actions → Docker Build → ECR → Argo CD → Kubernetes",
    problem: "Manual delivery lifecycle across environments.",
    impact: "Automated CI/CD across 8+ repositories and multiple deployment environments."
  }
];
