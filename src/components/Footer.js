import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';

export default function Footer() {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <FooterWrapper>
            <div className="container">
              <div className="row">
                <div className="col-md-6 py-3">
                  <p className="text-capitalize">
                    copyright &copy; tech store {new Date().getFullYear()}. all
                    rights reserved.
                  </p>
                </div>
                <div className="col-md-6 py-3 d-flex justify-content-around">
                  {value.socialIcons.map((item) => (
                    <a href={item.url} key={item.id}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTranasition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
