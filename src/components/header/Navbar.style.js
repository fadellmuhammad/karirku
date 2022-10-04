import styled from "styled-components"

export const NavbarWrapp = styled.section`
 /* Position and sizing of burger button */
.bm-burger-button {
  position: fixed;
  width: 25px;
  height: 20px;
  right: 36px;
  top: 21px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #424242;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: black;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
  width: 220px !important;
}

/* General sidebar styles */
.bm-menu {
  background: #424242;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  padding: 0.8em;

  a {
    color: white;
  }

  li {
    margin-bottom: 10px;
  }
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
`