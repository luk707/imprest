import { CSSObject } from "@emotion/core";

import { Theme } from "../styles";
import { atMost } from "./at-most";
import { removeEmpty } from "./remove-empty";

export type ResponsiveParamater<T> = T | T[];

type ResponsiveParamaterMap = {
  [k: string]: ResponsiveParamater<any>;
};

type ParamaterMap<T extends ResponsiveParamaterMap> = {
  [K in keyof T]: T[K] extends ResponsiveParamater<infer U> ? U : never
};

export function responsiveStyles<
  T extends ResponsiveParamaterMap,
  U extends ParamaterMap<T>
>(
  theme: Theme,
  responsiveParamaterMap: T,
  styleFn: (params: Partial<U>) => CSSObject
): CSSObject {
  const responsiveStyles = Object.keys(responsiveParamaterMap).filter(key =>
    Array.isArray(responsiveParamaterMap[key])
  );
  const fixedStyles = Object.keys(responsiveParamaterMap).filter(
    key => !Array.isArray(responsiveParamaterMap[key])
  );

  return removeEmpty({
    ...removeEmpty(
      styleFn(
        fixedStyles.reduce(
          (acc, cur) => ({
            ...acc,
            [cur]: responsiveParamaterMap[cur]
          }),
          {}
        )
      )
    ),
    ...removeEmpty(
      styleFn(
        responsiveStyles.reduce(
          (acc, cur) => ({
            ...acc,
            [cur]: responsiveParamaterMap[cur].length
              ? responsiveParamaterMap[cur][
                  responsiveParamaterMap[cur].length - 1
                ]
              : undefined
          }),
          {}
        )
      )
    ),
    ...(responsiveStyles.length
      ? Object.keys(theme.breakpoints)
          .reverse()
          .reduce(
            (acc, cur, i, arr) => ({
              ...acc,
              [atMost(theme.breakpoints[cur])]: removeEmpty(
                styleFn(
                  responsiveStyles.reduce(
                    (acc, cur) => ({
                      ...acc,
                      [cur]:
                        responsiveParamaterMap[cur].length - 2 >
                        arr.length - i - 1
                          ? undefined
                          : responsiveParamaterMap[cur][arr.length - i - 1]
                    }),
                    {}
                  )
                )
              )
            }),
            {}
          )
      : {})
  });
}
