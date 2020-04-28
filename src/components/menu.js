import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import tw from "twin.macro"
import _ from "lodash"

import { theme as CustomTheme } from "../../tailwind.config"
import ElSalvadorConectadoLogo from "../images/elsalvadorconectado-logo.svg"

class Menu extends React.Component {
  state = {
    classNameBg: "",
    showMobile: false
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)

    const { inspectScroll } = this.props
    if (!inspectScroll) {
      this.setState({ classNameBg: "--bg-blue" })
    }
  }

  handleScroll = () => {
    const { classNameBg } = this.state
    const { inspectScroll } = this.props
    if (inspectScroll) {
      if (window.pageYOffset > 500) {
        this.setState({ classNameBg: "--bg-blue" })
      } else if (classNameBg) {
        this.setState({ classNameBg: "--not-bg" })
      }
    } else {
      this.setState({ classNameBg: "--bg-blue" })
    }
  }

  handleMobileList = () => {
    const { showMobile } = this.state
    this.setState({ showMobile: !showMobile })
  }

  handleSubMenu = (param) => {
    if (param.target.nodeName === "I") {
      param.target.parentNode.parentNode.parentNode.classList.remove("--show")
    } else if (param.target.lastChild.nodeName === "UL") {
      param.target.lastChild.classList.add("--show")
    }
  }

  render() {
    const { data } = this.props
    const { classNameBg, showMobile } = this.state
    const menuItems = _.get(data, "wpgraphql.menuItems")
    return (
      <StyledWrapper className={`navbar ${classNameBg}`}>
        <nav className="menu__mobile container">
          <Link to="/" className="menu__mobile__logo">
            <img
              src={ElSalvadorConectadoLogo}
              alt="El Salvador Conectado"
              className={classNameBg === "--bg-blue" ? "visible" : "invisible"}
            />
          </Link>
          <ul className={`menu__mobile__list ${!showMobile ? "" : "--show"}`}>
            <li className="menu__mobile__list__item --close">
              <button
                type="button"
                className="menu__mobile__list__item__container"
                onClick={this.handleMobileList}
              >
                <i className="fa fa-close" />
              </button>
            </li>
            {menuItems &&
              menuItems.edges.map(({ node }) => (
                <li
                  key={node.id}
                  className={`menu__mobile__list__item ${_.get(
                    node,
                    "childItems.edges"
                  ) && "--has-items"}`}
                >
                  <button
                    type="button"
                    onClick={this.handleSubMenu}
                    className="menu__mobile__list__item__container"
                  >
                    {/* eslint-disable-next-line */}
                    {node.url !== "#" ? (
                      node.connectedObject.slug || node.url === "/" ? (
                        <Link
                          to={
                            node.url === "/"
                              ? "/"
                              : `/${node.connectedObject.slug}`
                          }
                          className="menu__mobile__list__item__href"
                        >
                          {node.label}
                        </Link>
                      ) : (
                        <a
                          href={node.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="menu__mobile__list__item__href"
                        >
                          {node.label}
                        </a>
                      )
                    ) : (
                      <span className="menu__mobile__list__item__text">
                        {node.label}
                      </span>
                    )}
                    {_.get(node, "childItems.edges") && (
                      <ul className="menu__mobile__list__item__sub-menu">
                        <li className="menu__mobile__list__item__sub-menu__item --close">
                          {/* eslint-disable-next-line */}
                          <a
                            role="button"
                            onClick={this.handleSubMenu}
                            tabIndex={0}
                          >
                            <i className="fa fa-chevron-left" />
                          </a>
                        </li>
                        {_.map(node.childItems.edges, ({ node: node_ }) => (
                          <li
                            key={node_.url}
                            className="menu__mobile__list__item__sub-menu__item"
                          >
                            {/* eslint-disable-next-line */}
                            {node_.url !== "#" ? (
                              node_.connectedObject.slug ||
                              node_.url === "/" ? (
                                <Link
                                  to={
                                    node_.url === "/"
                                      ? "/"
                                      : `/${node_.connectedObject.slug}`
                                  }
                                  className="menu__mobile__list__item__sub-menu__item__href"
                                >
                                  {node_.label}
                                </Link>
                              ) : (
                                <a
                                  href={node_.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="menu__mobile__list__item__sub-menu__item__href"
                                >
                                  {node_.label}
                                </a>
                              )
                            ) : (
                              <span className="menu__mobile__list__item__sub-menu__item">
                                {node_.label}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </button>
                </li>
              ))}
          </ul>
          <button
            type="button"
            className="menu__mobile__bar-icon"
            onClick={this.handleMobileList}
          >
            <i className="fa fa-bars" />
          </button>
        </nav>
        <nav className="menu container">
          <Link to="/" className="menu__logo">
            <img
              src={ElSalvadorConectadoLogo}
              alt="El Salvador Conectado"
              className={classNameBg === "--bg-blue" ? "visible" : "invisible"}
            />
          </Link>
          <ul className="menu__list">
            {menuItems &&
              menuItems.edges.map(({ node }) => (
                <li
                  key={node.id}
                  className={`menu__list__item ${_.get(
                    node,
                    "childItems.edges"
                  ) && "--has-items"}`}
                >
                  {/* eslint-disable-next-line */}
                  {node.url !== "#" ? (
                    node.connectedObject.slug || node.url === "/" ? (
                      <Link
                        to={
                          node.url === "/"
                            ? "/"
                            : `/${node.connectedObject.slug}`
                        }
                        className="menu__list__item__href"
                      >
                        {node.label}
                      </Link>
                    ) : (
                      <a
                        href={node.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="menu__list__item__href"
                      >
                        {node.label}
                      </a>
                    )
                  ) : (
                    <span className="menu__list__item__text">{node.label}</span>
                  )}
                  {_.get(node, "childItems.edges") && (
                    <ul className="menu__list__item__sub-menu__list">
                      {_.map(node.childItems.edges, ({ node: node_ }) => (
                        <li
                          key={node_.url}
                          className="menu__list__item__sub-menu__list__item"
                        >
                          {/* eslint-disable-next-line */}
                          {node_.url !== "#" ? (
                            node_.connectedObject.slug || node_.url === "/" ? (
                              <Link
                                to={
                                  node_.url === "/"
                                    ? "/"
                                    : `/${node_.connectedObject.slug}`
                                }
                                className="menu__list__item__sub-menu__list__item__href"
                              >
                                {node_.label}
                              </Link>
                            ) : (
                              <a
                                href={node_.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="menu__list__item__sub-menu__list__item__href"
                              >
                                {node_.label}
                              </a>
                            )
                          ) : (
                            <span className="menu__list__item__sub-menu__list__item">
                              {node_.label}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </nav>
      </StyledWrapper>
    )
  }
}

const StyledWrapper = styled.div`
  z-index: 2;
  ${tw`fixed w-full`}
  ${tw`font-poppins`}

  &.--bg-blue {
    ${tw`bg-baseBlue`}
  }

  &.--not-bg {
    ${tw`bg-transparent`}
  }

  .menu__mobile {
    ${tw`justify-between py-4`}

    &__logo {
      ${tw`h-8`}

      img {
        ${tw`h-full`}
      }
    }

    &__bar-icon {
      ${tw`text-3xl`}
      ${tw`self-end`}
    }

    &__list {
      ${tw`invisible bg-baseBlue`}
      ${tw`fixed w-full h-full inset-0 flex flex-col p-4`}
      transition: transform 0.35s, opacity 0.45s, visibility 0.45s;
      transform: translate(0, -100%);
      opacity: 0;

      &.--show {
        ${tw`visible`}
        transform: translate(0);
        opacity: 1;
      }

      &__item {
        border-color: rgba(255, 255, 255, 0.3);
        ${tw`flex justify-center items-center border-b`}

        &.--has-items::after {
          content: "\f105";
          font-family: fontAwesome;
          ${tw`text-xl`}
        }

        &.--close {
          ${tw`text-3xl`}
          ${tw`self-end border-b-0`}
        }

        &__container {
          ${tw`w-full`}
          ${tw`text-left`}
        }

        &__href, &__text {
          ${tw`py-4`}
        }

        &__text {
          ${tw`inline-block`}
        }

        &__sub-menu {
          ${tw`invisible bg-baseBlue`}
          ${tw`fixed w-full h-full inset-0 flex flex-col p-4`}
          transition: transform 0.35s, opacity 0.45s, visibility 0.45s;
          transform: translate(105%, 0);
          opacity: 0;
          z-index: 2;

          &.--show {
            ${tw`visible`}
            transform: translate(0);
            opacity: 1;
          }

          &__item {
            border-color: rgba(255, 255, 255, 0.3);
            ${tw`flex justify-start items-center border-b`}
            ${tw`text-left`}

            &.--close {
              ${tw`text-3xl`}
              ${tw`justify-end border-b-0`}
            }

            &__href, &__text {
              ${tw`w-full py-4`}
            }

            &__text {
              ${tw`inline-block`}
            }
          }
        }
      }
    }
  }

  .menu {
    ${tw`hidden`}
  }

  @media (min-width: ${CustomTheme.extend.screens.laptop}) {
    .menu {
      ${tw`text-sm`}
      ${tw`flex justify-between items-center py-4`}

      &__logo {
        ${tw`h-8`}

        img {
          ${tw`h-full`}
        }
      }

      &__list {
        ${tw`text-xs`}

        &__item {
         ${tw`flex justify-end items-center relative mb-0 ml-4`}
         ${tw`cursor-pointer`}

          &.--has-items::after {
            content: "\f107";
            font-family: fontAwesome;
            margin-left: 5px;
          }

          &:hover {
            ${tw`underline`}
          }

          &:hover > ul {
            opacity: 1;
            ${tw`visible`}
          }

          &__sub-menu__list {
            ${tw`text-blue text-xs`}
            ${tw`invisible absolute bg-white rounded p-2 pb-0 border-b-4  border-blue`}
            ${tw`flex flex-col justify-center`}
            width: 250px;
            top: 30px;
            opacity: 0;
            box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.08);
            transition: transform 0.35s, visibility 0.35s, opacity 0.35s;

            &__item {
              ${tw`text-right`}
              ${tw`border-b pb-2`}

              &:hover > [class*="__href"]{
                ${tw`underline`}
              }

              &__href {
                ${tw`text-blue text-right`}
              }
            }
          }
        }
      }
    }

    .menu__mobile {
      ${tw`hidden`}
    }
  }
`

export default ({ inspectScroll }) => (
  <StaticQuery
    query={graphql`
      query MenuQuery {
        wpgraphql {
          menuItems(where: { location: PRIMARY }) {
            edges {
              node {
                label
                url
                connectedObject {
                  ... on WPGraphQL_Post {
                    slug
                    title
                  }
                  ... on WPGraphQL_MenuItem {
                    title
                  }
                  ... on WPGraphQL_Tag {
                    slug
                    name
                  }
                  ... on WPGraphQL_Category {
                    slug
                    name
                  }
                  ... on WPGraphQL_Page {
                    slug
                    title
                  }
                }
                childItems {
                  edges {
                    node {
                      label
                      url
                      connectedObject {
                        ... on WPGraphQL_Post {
                          slug
                          title
                        }
                        ... on WPGraphQL_MenuItem {
                          title
                        }
                        ... on WPGraphQL_Tag {
                          slug
                          name
                        }
                        ... on WPGraphQL_Category {
                          slug
                          name
                        }
                        ... on WPGraphQL_Page {
                          slug
                          title
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <Menu data={data} inspectScroll={inspectScroll} />}
  />
)

Menu.defaultProps = {
  data: {},
  inspectScroll: false
}
