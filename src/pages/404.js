import React from 'react'
import Layout from '~/components/Layout/Layout'
import { Link } from 'gatsby'
import '../css/main.scss'

export default function NotFound() {
    return (
        <Layout>
            <section className="not_found">
                <h1>This page not found</h1>
                <Link to="/" className="link_home">
                    Take me back
                </Link>
            </section>
        </Layout>
    )
}
