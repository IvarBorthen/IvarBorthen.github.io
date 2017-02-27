import React, { Component } from 'react';

// COLOUR FUNCTIONS AND RANGE CALCULATIONS //
const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')

const GColor = (r, g, b) => {
  r = (typeof r === 'undefined') ? 0 : r;
  g = (typeof g === 'undefined') ? 0 : g;
  b = (typeof b === 'undefined') ? 0 : b;
  return {r:r, g:g, b:b};
};

const createColorRange = (c1, c2) => {
  let colorList = [];
  let tmpColor;
  for (let i = 0; i < 255; i++) {
    tmpColor = new GColor();
    tmpColor.r = c1[0] + ((i * (c2[0] - c1[0])) / 255);
    tmpColor.g = c1[1] + ((i * (c2[1] - c1[1])) / 255);
    tmpColor.b = c1[2] + ((i * (c2[2] - c1[2])) / 255);
    colorList.push(rgbToHex(Math.round(tmpColor.r), Math.round(tmpColor.g), Math.round(tmpColor.b)));
  }
  return colorList;
}

const propTypes = {
  runLength: React.PropTypes.number.isRequired,
};

const defaultProps = {
  animationPrefixName: 'marathonPathAnimation',
  roundLength: 21.0975, // half marathon!
  strokeBgColor: '#ccc',
  animationTimePrRound: 3000, // in ms
  pathStroke: 'M332.6,165.3 L318.6,169.2 L316.2,169.2 L310.1,170.8 L302.4,172.1 L297.4,173.6 L295.2,175 L293.3,177.7 L291.9,180 L286.8,183.9 L282.6,184.5 L274,186.3 L262.2,184.2 L249.2,184.1 L247.3,182.6 L247.3,179.1 L248.9,175.2 L249.7,170.9 L250.2,166 L248.7,160.3 L248.8,155.5 L253,150.1 L255.5,144.7 L253.1,139.5 L247.8,131.5 L244.8,129 L241.2,127.6 L235,126.4 L231.7,125.5 L229.2,123.3 L226.7,118.7 L226.1,114.5 L226.3,107.7 L225.4,101 L223.4,97.4 L220.1,94.8 L215.7,93.6 L209.9,94 L203.9,94.3 L198.2,94 L193.9,91.4 L188.5,87.7 L180,81.7 L173.5,76.6 L166.1,71.2 L161.6,66.1 L156.5,61.6 L150.8,57.1 L143.1,53.4 L139.3,52.2 L137,54.3 L131.4,54.4 L125,54.8 L120.4,54.5 L116.4,51.4 L113.1,48.8 L106.4,47.9 L100.1,47.4 L92.6,47.8 L86.4,50.7 L63.4,61.6 L61.3,63.5 L59.6,66.3 L56.5,69.3 L53.3,69.5 L50.8,69.7 L45.8,74 L39.7,73.8 L37.2,75.8 L34.9,78.6 L30.2,82.4 L22.9,84.3 L20.3,85.8 L4.4,86.4 L4.3,84.9 L6.4,83.7 L8.1,82 L9.8,80.3 L11,78.3 L11,76.6 C11,76.6 4.7,69.8 4.9,69.9 C5.2,70.1 3.8,66.5 3.8,66.5 L3.4,64.9 L5.7,64.5 L6.3,65.9 L9.2,68 L12.8,68.4 L16.9,67.3 L20.9,65.2 L24.7,62.3 L30.4,57.4 L31.1,54.4 L30.8,50.8 L32.5,53.8 L34.1,55.1 L45.9,59 L49.6,57.4 L53.3,55.8 L58.6,52.7 L63.6,51.8 L67.6,49.7 L74,46.9 L82.3,41.1 L84.5,38.6 L89.7,36.2 L96.9,32.8 L102,28.9 L107,23.9 L114.9,19.9 L121.8,18.1 L129.1,18.6 L139.3,18.8 L146.6,21 L152.3,23 L156.6,22.8 L160.7,24.6 L164,26.6 L169.2,26.6 L174,26 L183,27.1 L189.8,29 L197.2,29.9 L201.9,30.6 L208.5,31.7 L201.7,26.9 L208.7,27.3 L214.9,28.5 L220.5,30.7 L224.4,32.3 L228.4,33.6 L229.5,34.6 L232.3,34.5 L234.6,35.2 L237.9,37.2 L241.5,36.9 L245.8,37.7 L249.5,37.8 L255.3,41.9 L259.7,43.1 L265.2,44.3 L266.7,45.2 L269.1,49.4 L270.3,53.9 L272.5,58.3 L276.1,61.5 L280.2,63.9 L281.3,66.6 L281.9,69.7 L283.8,71.2 L287,71.7 L289.5,72.8 L293.3,74 L296.9,77.2 L300.9,80.3 L306.6,83 L312,86.2 L318.1,89.8 L322.8,92.9 L328.5,93.2 L336.3,93.3 L344.5,94 L352.6,95 L356.4,96.2 L361.3,98.4 L367,101.1 L371.2,101.5 L375,101 L379.2,101.4 L385.2,101.8 L389.6,104.4 L394.1,110.2 L398.2,112.6 L406.1,115.5 L413.4,113.6 L419.6,112.4 L425.8,111.9 L431.9,109.7 L435.3,108.6 L444,108.5 L453.1,107.7 L461,107.2 L466.6,105.3 L473.6,101.5 L482.5,94.7 L487.9,92 L491.4,90.2 L495.6,87.8 L499.9,85.2 L505.1,84.5 L509.2,81.7 L513.1,79.2 L517.4,76.6 L519.9,75.3 L521.8,72.6 L524.1,70.5 L525.5,69.3 L526.9,66.3 L529.6,65.8 L533.6,65.4 L537.9,64.5 L541.4,64.5 L552,64.6 L558.1,62.4 L564.3,61.2 L569.8,60.6 L574.1,58.6 L576.9,56.1 L580.7,53.8 L584.1,53.4 L588.3,56.2 L594.5,55 L601.9,53.5 L607,51.3 L608.3,48.6 L606.9,46.4 L606.4,42 L607.7,38 L611.2,35.6 L615.8,34.8 L624.2,32.8 L632.8,31 L638,29.2 L642.3,29 L645.9,27.6 L651.3,24.2 L655.8,23 L662.5,24.5 L668.3,25.8 L673.3,26.7 L678.9,28.3 L684.1,30 L682.5,24.6 L679.9,20.3 L677.7,15.9 L674.3,11.8 L670,8.6 L667.7,6.6 L669.4,5.5 L671.9,4.2 L675,3 L678.4,4.3 L680.7,7.4 L682.6,10.6 L685,14.8 L687,20.8 L688.3,25.7 L691.3,29.9 L694,32.9 L697.2,36.8 L698.6,38 L701.4,43.8 L704.8,49.2 L707.4,51.8 L710.4,53.2 L714.6,56.7 L718.8,61.2 L720.1,60.2 L722,58.2 L725.8,60.5 L725.8,64 L724.7,67.1 L723.8,69.3 L728.1,72.5 L732.8,73.9 L737.3,76.2 L740,77.5 L739.9,81.2 L737.7,83.7 L737.3,87.9 L738.7,90.1 L740.7,91.3 L741.9,92.7 L742.7,96.6 L744.8,99.5 L750.5,103.2 L744.1,115.3 L736.9,127.6 L730.7,138.8 L726.6,144.6 L716.7,152.6 L713.5,155.2 L708.7,153.4 L703.2,153.3 L695.1,154.7 L689.7,155.7 L683.1,156.3 L677,159.6 L669.3,162.7 L652.2,167.1 L648.2,169.2 L644.6,172.9 L638.9,186.1 L636.2,190 L631.4,193.4 L625.8,195.3 L621.1,197.4 L616.8,202.4 L612.4,207 L610,209.4 L612.8,203.5 L615.2,199.4 L618.4,195.8 L622.2,192.9 L625.5,189.7 L628.6,185.7 L632.2,179.6 C632.2,179.6 633.9,175.5 634.3,174.9 C634.6,174.4 635.9,170.4 635.9,170.4 L636.9,165.1 L638.1,158.9 L638.6,155.1 L640.5,152.4 L641.4,150.9 L642.1,145.1 L643.5,140.4 L644.5,136.9 L643.6,135 L644.5,133.5 L646.3,132.8 L648.4,133.3 L651.5,131.6 L651.4,129.5 L651.6,122.7 L651.7,117.2 L651.5,112.9 L649.8,110.5 L648.9,107.9 L648.8,105.1 L649.6,102.5 L651.6,99.2 L646.7,97 L643,96.2 L639.7,94.2 L636.4,91.6 L632,93.2 L629,91.8 L622,90.8 L613.7,90.8 L606.4,92 L600,94.8 L592,99 L585.6,102.8 L578.6,108.3 L572.6,113.7 L568,118.6 L562.2,125.5 L557,130.7 L549.8,135.4 L529.7,149.1 L533.2,148.4 L536,146.6 L538.6,145 L541.1,143 L543.5,141.3 L545.9,141.3 L547.8,142.8 L550.2,145.2 L549.6,148 L548.9,152.7 L548.4,158.3 L552.6,163.5 L555.2,164.3 L558.1,166.4 L559.6,169.7 L563.6,172.8 L566.8,178.5 L567.6,183.1 L568.1,189.3 L568.3,192.5 L569.7,195.4 L570.8,197.1 L572,200.2 L569.433984,203.206641 C569.433984,203.206641 566.043555,202.836523 565.171777,201.769141 C563.6,203.206641 559.750391,208.526953 559.750391,208.526953 L558.17666,212.117285 L554.181543,217.627051 L552.600488,219.019141 L557.036523,223.99082 L558.048242,226.172461 L558.806543,231.020117 L557.183008,233.542578 L558.481348,235.717383 L561.711328,236.179785 L568.211328,232.266699 L570.690332,225.907324 L577.438379,225.816016 L579.094141,233.464941 L576.105371,241.051367 C576.105371,241.051367 569.764062,248.081152 563.473535,251.502051 C560.88418,246.610938 556.140527,237.907813 556.140527,237.907813 L551.539453,234.545996 L550.300195,231.017188 L548.703516,229.81748 L546.219629,229.06748 L541.449609,232.294043 L533.232324,235.01084 L529.070703,234.93125 L526.568262,237.855566 L524.167871,238.599219 L511.367578,244.04502 L513.788965,250.278906 L504.908594,255.302832 L512.871484,274.083105 L505.199121,278.066992 L503.08877,280.701758 L484.541406,288.142676 L479.132227,288.176855 L476.638086,289.199805 L473.648828,291.512305 L470.489648,293.357031 L467.148828,294.395117 L455.810937,292.896094 L452.023828,290.01377 L448.825586,286.15 L445.748926,284.927344 L443.672266,284.29209 L441.972559,286.717871 L435.159082,287.650977 L423.936426,289.127539 L412.266992,288.060645 L396.183496,286.57627 L385.163965,289.765234 L381.658105,282.633398 L381.538965,280.737402 L379.721094,279.33457 L368.517969,259.840918 L364.953027,255.061133 L362.496973,250.703711 L356.846094,246.354102 L355.103906,243.043066 L355.955957,237.139746 L353.158594,230.412207 L337.417383,238.359473 L328.433984,244.087012 L312.748926,248.934668 L314.744531,246.793555 L313.366113,243.138281 L306.360254,247.028906 L299.433008,250.953223 L295.294824,251.928809 L291.147363,250.631445 L279.63125,252.527441 L276.922754,255.459082 L272.868555,263.77207 L260.50332,265.381934 L257.042383,266.946875 L251.038965,272.286719 L248.5375,273.800391 L243.857324,273.939063 L235.533105,275.589453 L226.681055,276.666113 L219.830957,276.514746 L214.604883,264.884863 L216.08877,261.068945 L218.578027,256.682227 L223.078516,253.168066 L226.677148,250.530371 L229.596582,252.405859 L241.907129,245.879492 L255.272852,240.227637 L264.44082,237.644629 L265.42959,231.82627 L267.221094,230.366797 L276.974023,229.103613 L312.858301,212.995703 L314.436914,211.20957 L315.359766,208.693457 L317.39248,206.816504 L337.21084,198.739844 L344.00918,198.178809 L345.36709,196.227637 L344.300684,191.498145 L345.330957,190.580664 L351.451074,187.99082 L365.095605,180.719824 L371.612695,176.670508 L374.622949,173.907813 L371.470117,169.127539 L361.171289,157.691016 L355.023828,158.197363 L344.076562,160.543066 L340.473535,161.583594 L337.671777,163.875586 L332.6,165.3 Z',
  colorStart: '#00ff00',
  colorEnd: '#ff0000'
};

class Marathon extends Component {
  constructor(props) {
      super(props);
      this.onAnimationEnd = this.onAnimationEnd.bind(this);
      this.state = {
        pathLength: 0,
        animationPlayState: 'paused',
        preFix: this.preFix(),
        iterationCount: 0,
        storedRandomKey: '',
        colorRanges: createColorRange(hexToRgb(props.colorStart), hexToRgb(props.colorEnd))
      };
  }

  onAnimationEnd(event) {
    let newIteractionCount = this.state.iterationCount + 1;
    let updateDrawing = newIteractionCount < (this.props.runLength / this.props.roundLength);
    this.setState({
      iterationCount: newIteractionCount,
      updateDrawing,
      storedRandomKey: updateDrawing ? Math.random() : this.state.storedRandomKey
    });
    if (updateDrawing) {
      this.changeAnimationRules(newIteractionCount, this.state.pathLength);
    }
  }
  componentDidMount() {
    const path = document.querySelector('.runpath');
    const length = path.getTotalLength();

    this.playAnimation(true);
    this.setState({
      pathLength: length,
      updateDrawing: Math.random()
    });
    this.changeAnimationRules(0, length);
  }

  playAnimation(playIt) {
    this.setState({
      animationPlayState: playIt ? 'running' : 'paused'
    });
  }

  preFix() {
    let styles = window.getComputedStyle(document.documentElement, '');
    let prefix = (Array.prototype.slice
      .call(styles)
      .join('')
      .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1];
    return prefix.substr(0,1).toUpperCase() + prefix.substr(1);
  }

  changeAnimationRules(currentRound, pathLength) {
    // calculate TO colours
    let totalRounds = (this.props.runLength / this.props.roundLength);
    let nextColourRange = currentRound + 1 > totalRounds ? 254 : Math.floor(((currentRound + 1) / totalRounds) * 255);
    let colorTo = this.state.colorRanges[nextColourRange];
    console.log(colorTo)
    // calculate distance (headsup: 0 === 100%, pathLength === 0%)
    let currentPathLength = totalRounds > currentRound + 1
      ? 0 : pathLength - (pathLength * ((this.props.runLength - (this.props.roundLength * currentRound)) / this.props.roundLength));

    // update animation rules
    Object.keys(document.styleSheets).some((indexSome) => {
      // search and delete all previous animations...
      let found = false;
      for (let x in document.styleSheets[indexSome].cssRules) {
        if (document.styleSheets[indexSome].cssRules[x].name === this.props.animationPrefixName) {
          document.styleSheets[indexSome].deleteRule(x);
          found = true;
        }
      }
      if (found) {
        // insert new rules.
        document.styleSheets[indexSome].insertRule(`@-${this.state.preFix.toLocaleLowerCase()}-keyframes marathonPathAnimation { 100% { stroke-dashoffset: ${currentPathLength}; stroke: ${colorTo}; } }`, Object.keys(document.styleSheets[indexSome].cssRules.length));
        document.styleSheets[indexSome].insertRule(`@keyframes marathonPathAnimation { 100% { stroke-dashoffset: ${currentPathLength}; stroke: ${colorTo}; } }`, Object.keys(document.styleSheets[indexSome].cssRules.length));
        return true;
      }
      return false;
    });
  }

  render() {
    // calculate how many rounds there is
    let totalRounds = (this.props.runLength / this.props.roundLength);
    let currentRound = this.state.iterationCount;
    // get colours for fade and color effects ( we might wanna do something else here ???)
    let thisColourRange = currentRound > totalRounds ? 254 : Math.floor((currentRound / totalRounds) * 255);
    let prevColourRange = Math.floor((currentRound / totalRounds) * 255);
    if (prevColourRange > 254) {
      prevColourRange = Math.floor(((currentRound - 1)/ totalRounds) * 255);
    }
    let colorTo = this.state.colorRanges[thisColourRange];
    // set easing for animation
    let ease = 'linear';
    if (currentRound === 0 && totalRounds > 1) {
      ease = 'ease-in';
    } else if (totalRounds <= 1) {
      ease = 'ease-in-out';
    } else if (currentRound === Math.floor(totalRounds)) {
      ease = 'ease-out';
    }
    // styles for animated path
    let styles = {
      [`${this.state.preFix}AnimationPlayState`]: this.state.animationPlayState,
      strokeDasharray: this.state.pathLength,
      strokeDashoffset: this.state.pathLength,
      animationIterationCount: 1,
      animationDuration: `${this.props.animationTimePrRound}ms`,
      animationTimingFunction: ease,
      stroke: colorTo
    };
    return (
      <div className="marathons">
        <div className="counter">
          round: <h2>{currentRound}</h2>
        </div>
        <svg width="754px" height="297px" viewBox="0 0 754 297" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none">
            <path
              className="runpath"
              d={this.props.pathStroke} stroke={(currentRound > 0 && totalRounds > 1) ? this.state.colorRanges[prevColourRange] : this.props.strokeBgColor} strokeWidth="5" />
            <path
              key={this.state.storedRandomKey}
              onAnimationEnd={this.onAnimationEnd}
              style={styles}
              className={this.state.pathLength !== 0 ? "runpath animate" : "runpath"}
              d={this.props.pathStroke} strokeWidth="5" />
          </g>
        </svg>
        {this.props.runLength}
      </div>
    );
  }
}

Marathon.propTypes = propTypes;
Marathon.defaultProps = defaultProps;

export default Marathon;
