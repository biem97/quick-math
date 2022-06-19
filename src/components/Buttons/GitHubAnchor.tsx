import { ActionIcon, Anchor, Tooltip } from "@mantine/core";
import { TiSocialGithub } from "react-icons/ti";

const GitHubAnchor = () => {
  return (
    <Tooltip
      style={{
        flexGrow: 1,
      }}
      label="GitHub Source Code"
      withArrow
    >
      <Anchor href="https://github.com/biem97/quick-math" target="_blank">
        <ActionIcon
          style={{
            width: "100%",
          }}
          size="xl"
          variant="default"
        >
          <TiSocialGithub color="skyblue" size="46" />
        </ActionIcon>
      </Anchor>
    </Tooltip>
  );
};

export default GitHubAnchor;
