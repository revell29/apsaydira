import * as React from "react";

import {
  ButtonGroup,
  Container,
  Icon,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { BiCommand } from "react-icons/bi";
import { FaGithub, FaTwitter } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

const Footer: React.FC = () => {
  const content = `
Contents licensed under [CC BY-NC-SA 4.0](https://griko.dev/cc-by-nc-sa).${"  "}
Made using [Next.js](https://nextjs.org), [Chakra UI](https://chakra-ui.com),
and [DatoCMS](https://www.datocms.com). Hosted on [Vercel](https://vercel.com).

MIT License &copy; ${new Date().getFullYear()}&ndash;present
[apsyadira.com](.). Version 7.
`;

  return (
    <Container as="footer" color="whiteAlpha.700" maxW="4xl" p={[4, 8]}>
      <Stack align="center" fontSize="xs" spacing={4} textAlign="center">
        <ButtonGroup>
          <IconButton
            aria-label="GitHub"
            as="a"
            href="https://github.com/revell29"
            icon={<Icon as={FaGithub} />}
            rounded="full"
            target="_blank"
            variant="ghost"
          />
          <IconButton
            aria-label="Twitter"
            as="a"
            href="https://twitter.com/apsyadiraa"
            icon={<Icon as={FaTwitter} />}
            rounded="full"
            target="_blank"
            variant="ghost"
          />
          <IconButton
            aria-label="Open keybinds cheatsheet"
            icon={<Icon as={BiCommand} />}
            onClick={() => open()}
            rounded="full"
            variant="ghost"
          />
        </ButtonGroup>
      </Stack>
    </Container>
  );
};

export default Footer;
