// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: avmjKt9si715Y7yLrfFfBh
// Component: ZrghM0FZJrZ0

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { DataFetcher } from "@plasmicpkgs/plasmic-query";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_cms_starter.module.css"; // plasmic-import: avmjKt9si715Y7yLrfFfBh/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: ZrghM0FZJrZ0/css

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
  httpRestApiFetcher?: p.Flex<typeof DataFetcher>;
  h1?: p.Flex<"h1">;
  text?: p.Flex<"div">;
  ol?: p.Flex<"ol">;
  link?: p.Flex<"a">;
};

export interface DefaultHomepageProps {
  className?: string;
}

const $$ = {};

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <DataFetcher
              data-plasmic-name={"httpRestApiFetcher"}
              data-plasmic-override={overrides.httpRestApiFetcher}
              className={classNames("__wab_instance", sty.httpRestApiFetcher)}
              dataName={"fetchedData"}
              errorDisplay={
                <ph.DataCtxReader>
                  {$ctx => "Error fetching data"}
                </ph.DataCtxReader>
              }
              errorName={"fetchError"}
              headers={{
                "Content-Type": "application/json",
                Accept: "application/json"
              }}
              loadingDisplay={
                <ph.DataCtxReader>{$ctx => "Loading..."}</ph.DataCtxReader>
              }
              method={"GET"}
              noLayout={false}
              url={"https://api.github.com/users/plasmicapp/repos"}
            />

            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Get started with Plasmic visual CMS."}
            </h1>
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              <React.Fragment>
                <React.Fragment>
                  {
                    "Use Plasmic as a visual editor and headless CMS for your new or existing website!\n\nSupports frameworks like Next.js, Gatsby, Remix, Hydrogen, React, plain HTML, and many more.\n\nTo get started:\n\n"
                  }
                </React.Fragment>
                {
                  <ol
                    data-plasmic-name={"ol"}
                    data-plasmic-override={overrides.ol}
                    className={classNames(
                      projectcss.all,
                      projectcss.ol,
                      sty.ol
                    )}
                  >
                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li___3WY3U
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>
                          {"Integrate with your codebase by "}
                        </React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"clicking the Code button in the toolbar"}
                        </span>
                        <React.Fragment>{"."}</React.Fragment>
                      </React.Fragment>
                    </li>
                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li__sCRu
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>
                          {"Follow the instructions to "}
                        </React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"register your own React components"}
                        </span>
                        <React.Fragment>
                          {
                            ", so that you can drag and drop them in Plasmic Studio."
                          }
                        </React.Fragment>
                      </React.Fragment>
                    </li>
                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li__u0M71
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>
                          {"Invite your colleagues as the "}
                        </React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"content creator role"}
                        </span>
                        <React.Fragment>
                          {
                            " to give them a simpler and safer editing experience using only your components, or as the "
                          }
                        </React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"designer role"}
                        </span>
                        <React.Fragment>
                          {
                            " to give them full advanced layout/styling freedom\u2014no existing components required."
                          }
                        </React.Fragment>
                      </React.Fragment>
                    </li>
                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li__w4Lu
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>
                          {"Now they can create pages or sections, and "}
                        </React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"hit Publish"}
                        </span>
                        <React.Fragment>
                          {
                            " to deploy to production or staging without bugging developers!"
                          }
                        </React.Fragment>
                      </React.Fragment>
                    </li>
                  </ol>
                }
                <React.Fragment>{"\n"}</React.Fragment>
                {
                  <a
                    data-plasmic-name={"link"}
                    data-plasmic-override={overrides.link}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.link
                    )}
                    href={"https://docs.plasmic.app/learn/content-management/"}
                  >
                    {"Learn more in the docs"}
                  </a>
                }
                <React.Fragment>{"!"}</React.Fragment>
              </React.Fragment>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section", "httpRestApiFetcher", "h1", "text", "ol", "link"],
  section: ["section", "httpRestApiFetcher", "h1", "text", "ol", "link"],
  httpRestApiFetcher: ["httpRestApiFetcher"],
  h1: ["h1"],
  text: ["text", "ol", "link"],
  ol: ["ol"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  httpRestApiFetcher: typeof DataFetcher;
  h1: "h1";
  text: "div";
  ol: "ol";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    httpRestApiFetcher: makeNodeComponent("httpRestApiFetcher"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    ol: makeNodeComponent("ol"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
