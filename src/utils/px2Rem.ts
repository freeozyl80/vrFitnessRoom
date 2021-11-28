import { useLifecycles } from "react-use";

class Px2Rem {
  pWidth = 1285; //草稿宽度
  cWidth = 1285; //屏幕宽度
  pRem = 100; //转换倍数
  constructor(pWidth: number, pRem: number) {
    this.pWidth = pWidth;
    this.pRem = pRem;
  }
  setRem = (): void => {
    const html = document.getElementsByTagName("html")[0];
    const realCwidth =
      document.body.clientWidth || document.documentElement.clientWidth; //获得真正的宽度
    this.cWidth =
      realCwidth > 1285 ? 1285 : realCwidth < 800 ? 800 : realCwidth;
    //进行换算，规则为 真正的宽度/草稿纸的宽度 * 倍数 = 1rem
    html.style.fontSize = (this.cWidth / this.pWidth) * this.pRem + "px";
    
  };
  getRemToPx = (rem: number): number => {
    return (this.cWidth / this.pWidth) * this.pRem * rem;
  };
}

export const px2Rem = new Px2Rem(1285, 100);

const setRem = () => {
  px2Rem.setRem();
};

export const useSetRem = () => {
  useLifecycles(
    () => {
      //componentDidMount
      setRem(); //初始化
      window.addEventListener("resize", setRem);
    },
    () => {
      //componentWillUnMount
      window.removeEventListener("resize", setRem);
    }
  );
};
