import Link from "next/link";
import {withRouter} from "next/router";
import {Children} from "react";
import React from "react";

export default withRouter(({router, children, as, href, className, ...rest}) => (
  <Link {...rest} href={href} as={as} className={className}>
    {React.cloneElement(Children.only(children), {
      className: className + " " + ((router.asPath === href || router.asPath === as) ? `active` : '')
    })}
  </Link>
));
