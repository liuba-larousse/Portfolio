import React from "react"
import s from "./DividerStyles.module.scss"
import { InView } from "react-intersection-observer"

export default function Divider() {
  return (
    <InView threshold={0.5}>
      {({ inView, ref, entry }) => (
        <section ref={ref} className={s.section}>
          <div className={s.circle}></div>
          <div className={inView ? `${s.hr} ${s.hrAnimate}` : `${s.hr} `}></div>
          <div className={inView ? `${s.vl} ${s.vlAnimate}` : `${s.vl} `}></div>
        </section>
      )}
    </InView>
  )
}
