import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall,
  ParagraphMedium,
  ParagraphSmall,
} from "baseui/typography";

export const H1: typeof HeadingXXLarge = (props) => (
  <HeadingXXLarge {...props} $style={{ marginTop: 0, marginBottom: "18px" }} />
);

export const H2: typeof HeadingXLarge = (props) => (
  <HeadingXLarge {...props} $style={{ marginTop: 0, marginBottom: "24px" }} />
);

export const H3: typeof HeadingSmall = (props) => (
  <HeadingSmall {...props} $style={{ marginTop: 0, marginBottom: "24px" }} />
);

export const H4: typeof HeadingMedium = (props) => (
  <HeadingMedium {...props} $style={{ marginTop: 0, marginBottom: "18px" }} />
);

export const H5: typeof HeadingLarge = (props) => (
  <HeadingLarge {...props} $style={{ marginTop: 0, marginBottom: "18px" }} />
);

export const H6: typeof HeadingXSmall = (props) => (
  <HeadingXSmall {...props} $style={{ marginTop: 0, marginBottom: "12px" }} />
);

export const P2: typeof ParagraphMedium = (props) => (
  <ParagraphMedium {...props} $style={{ marginTop: 0, marginBottom: "18px" }} />
);

export const P3: typeof ParagraphSmall = (props) => (
  <ParagraphSmall
    {...props}
    as="small"
    $style={{ marginTop: 0, marginBottom: 0, display: "block" }}
  />
);
