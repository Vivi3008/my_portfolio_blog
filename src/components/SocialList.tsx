import React from "react";
import config from "../lib/config";
import { FiLinkedin, FiGithub, FiGitlab } from 'react-icons/fi'
import { SiWhatsapp, SiGmail} from 'react-icons/si'

export function SocialList({}) {
  return (
    <div>
      <a
        title="Twitter"
        href={`https://linkedin.com/in/${config.linkedin_account}`}
        target="_blank"
        rel="noopener"
      >
        <FiLinkedin size={24} color="#222"/>
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <FiGithub size={24} color={"#222"} />
      </a>
      <a
        title="GitLab"
        href={`https://gitlab.com/${config.gitlab_account}`}
        target="_blank"
        rel="noopener"
      >
        <FiGitlab size={24} color={"#222"} />
      </a>
      <a
        title="Whatsapp"
        href={`https://api.whatsapp.com/send?phone=${config.whatsapp}`}
        target="_blank"
        rel="noopener"
      >
        <SiWhatsapp size={24} color={"#222"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
