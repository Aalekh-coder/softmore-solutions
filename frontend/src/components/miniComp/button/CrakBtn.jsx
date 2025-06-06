import React from 'react';
import styled from 'styled-components';

const CrakBtn = () => {
  return (
    <StyledWrapper>
      <button>
        <p>Home!</p>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    border: none;
    width: 140px;
    height: 50px;
    color: #fff;
    z-index: 1;
    display: flex;
    background: purple;
    position: relative;
    cursor: pointer;
  }

  button p {
    margin: 0 auto;
    align-self: center;
    font-size: 17px;
    font-weight: bold;
    text-align: center;
  }

  button::after {
    position: absolute;
    content: "";
    width: 100%;
    z-index: -1;
    height: 10%;
    bottom: 0;
    clip-path: polygon(
      0% 74%,
      4% 75%,
      8% 76%,
      11% 77%,
      15% 78%,
      20% 78%,
      25% 77%,
      32% 77%,
      37% 75%,
      40% 74%,
      43% 74%,
      46% 73%,
      52% 72%,
      57% 72%,
      65% 74%,
      66% 75%,
      71% 78%,
      75% 82%,
      81% 86%,
      83% 88%,
      88% 91%,
      90% 94%,
      94% 96%,
      98% 98%,
      100% 100%,
      82% 100%,
      0 100%
    );
    background: #8792eb;
    transition: 0.2s ease;
  }

  button::before {
    position: absolute;
    content: "";
    /*   bottom: 80%; */
    transform: rotate(180deg);
    width: 100%;
    height: 10%;
    transition: 0.2s ease;
    /*   bottom:; */
    z-index: -1;
    clip-path: polygon(
      0% 74%,
      4% 75%,
      8% 76%,
      11% 77%,
      15% 78%,
      20% 78%,
      25% 77%,
      32% 77%,
      37% 75%,
      40% 74%,
      43% 74%,
      46% 73%,
      52% 72%,
      57% 72%,
      65% 74%,
      66% 75%,
      71% 78%,
      75% 82%,
      81% 86%,
      83% 88%,
      88% 91%,
      90% 94%,
      94% 96%,
      98% 98%,
      100% 100%,
      82% 100%,
      0 100%
    );
    background: #8792eb;
  }

  button:hover::after {
    clip-path: polygon(
      0 30%,
      9% 34%,
      7% 39%,
      11% 43%,
      13% 33%,
      17% 30%,
      24% 34%,
      25% 35%,
      30% 31%,
      30% 38%,
      39% 33%,
      35% 43%,
      43% 45%,
      55% 46%,
      65% 74%,
      67% 66%,
      81% 57%,
      75% 82%,
      81% 86%,
      83% 88%,
      88% 91%,
      90% 94%,
      94% 96%,
      98% 98%,
      100% 100%,
      82% 100%,
      0 100%
    );
    height: 80%;
  }

  button:hover::before {
    clip-path: polygon(
      0 30%,
      9% 34%,
      7% 39%,
      11% 43%,
      13% 33%,
      17% 30%,
      24% 34%,
      25% 35%,
      30% 31%,
      30% 38%,
      39% 33%,
      35% 43%,
      43% 45%,
      55% 46%,
      65% 74%,
      67% 66%,
      81% 57%,
      75% 82%,
      81% 86%,
      83% 88%,
      88% 91%,
      90% 94%,
      94% 96%,
      98% 98%,
      100% 100%,
      82% 100%,
      0 100%
    );
    height: 80%;
  }`;

export default CrakBtn;
