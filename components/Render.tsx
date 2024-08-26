
import { Fragment, PropsWithChildren, ReactNode } from 'react';

type RenderProps = PropsWithChildren<{ifCondition: any, elseRender?: ReactNode}>

export const Render = ({
  ifCondition,
  elseRender,
  children,
}: RenderProps) => (!!ifCondition ? children : (elseRender || <Fragment />))