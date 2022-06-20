import { ActionIcon, Anchor } from "@mantine/core";
import { TiSocialGithub } from "react-icons/ti";

const GitHubAnchor = () => {
  return (
    <Anchor
      id="git-hub-anchor"
      style={{
        flexGrow: 1,
      }}
      href="https://github.com/biem97/quick-math"
      target="_blank"
    >
      <ActionIcon
        style={{
          width: "100%",
        }}
        size="xl"
        variant="default"
      >
        <TiSocialGithub size="46" />
      </ActionIcon>
    </Anchor>
  );
};

export default GitHubAnchor;
