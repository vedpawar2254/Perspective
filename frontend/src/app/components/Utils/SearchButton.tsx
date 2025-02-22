'use client';

import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <StyledWrapper>
      <div className="form-control">
        <input className="input input-alt" placeholder="Type a URL..." required type="text" />
        
        <span className="input-border input-border-alt" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input {
    color: #fff;
    font-size: 0.9rem;
    background-color: transparent;
    width: 100%;
    box-sizing: border-box;
    padding-inline: 0.5em;
    padding-block: 0.7em;
    border: none;
    border-bottom: var(--border-height) solid var(--border-before-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .input::placeholder {
    color: white;
  }

  .input-border {
    position: absolute;
    background: var(--border-after-color);
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    transition: width 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  .input:focus {
    outline: none;
  }

  .input:focus + .input-border {
    width: 100%;
  }

  .form-control {
    position: relative;
    --width-of-input: 300px;
  }

  .input-alt {
    font-size: 1.2rem;
    padding-inline: 1em;
    padding-block: 0.8em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .input-border-alt {
    height: 3px;
    background: linear-gradient(
      90deg,
      #707070 0%,
      #909090 25%,
      #00BFFF 50%,
      #909090 75%,
      #707070 100%
    );
    transition: width 0.4s cubic-bezier(0.42, 0, 0.58, 1.00);
  }

  .input-alt:focus + .input-border-alt {
    width: 100%;
  }
`;

export default Input;