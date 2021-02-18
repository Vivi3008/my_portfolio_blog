import config from "../../config.json";

type Config = {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly site_keywords: { keyword: string }[];
  readonly posts_per_page: number;
  readonly linkedin_account: string;
  readonly github_account: string;
  readonly gitlab_account: string;
  readonly whatsapp: number
};

export default config as Config;
