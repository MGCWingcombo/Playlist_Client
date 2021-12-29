import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./TextBtnStyle";

function BtnText2(number) {
  switch (number) {
    case 1: {
      return "사람들과 만나서 즐거운 시간을 보낸다.";
    }
    case 2: {
      return "사람이 많이 없는 모서리";
    }
    case 3: {
      return "“만약 갑자기 ...” 의식의 흐름에 따라 생각을 이어간다.";
    }
    case 4: {
      return "지나다니면서 분위기가 맘에드는 곳에 들어간다.";
    }
    case 5: {
      return "즐기는 것도 좋지만 일단 게임은 이기고 봐야지";
    }
    case 6: {
      return "처음 먹어보는 익숙하지 않은 아이스크림";
    }
    case 7: {
      return "(심부름 끝나고는 뭘 할까 공부도 해야하는데~)";
    }
    case 8: {
      return "맛집을 다시 검색해서 찾아본다.";
    }
    case 9: {
      return "드라이 샴푸? 그게 뭐야? 그거 좋아?";
    }
    case 10: {
      return "먼저 나서서 나를 소개한다.";
    }
    case 11: {
      return "음식이 모자라면 치킨 시켜먹지 뭐";
    }
    case 12: {
      return "(보름달이 떴는데 나한테 전화를 왜하지..?)";
    }
    default: {
      return null;
    }
  }
}

function BtnText(number) {
  switch (number) {
    case 1: {
      return "집에서 혼자만의 시간을 가진다.";
    }
    case 2: {
      return "사람들이 많이 모여있는 한 가운데";
    }
    case 3: {
      return "“버스는 언제올까...” 기다리는 버스에 대해 생각한다.";
    }
    case 4: {
      return "세워놓은 계획대로 차근차근 움직인다.";
    }
    case 5: {
      return "승패는 하나도 안 중요해! 즐기면서 하루를 보내야지";
    }
    case 6: {
      return "내가 자주 사먹던 익숙한 아이스크림";
    }
    case 7: {
      return "(아.. 오늘 계획 다 틀어져서 기분이 안 좋다..)";
    }
    case 8: {
      return "맛있어 보이는 옆 식당으로 들어간다.";
    }
    case 9: {
      return "요즘 피곤해 보이더라 ㅠ 무슨 일 있는 거야?";
    }
    case 10: {
      return "일단 사람들이 자기 소개하는 걸 듣고 있다.";
    }
    case 11: {
      return "음식이 모자라지 않을까? 지난 번에는 몇 명이 왔지?";
    }
    case 12: {
      return "(감동이다... 나를 생각해준 거야 ㅠㅠㅠ)";
    }
    default: {
      return null;
    }
  }
}

// function mbtiDecide(number) {
//   switch (number) {
//     case 1: {
//       function click(btnid) {
//         const btnids = btnid.target.id;

//         if (btnids == "topbtn") {
//           A = A + 1;
//           console.log(A);
//         } else if (btnids == "bottombtn") {
//           A -= 1;
//           console.log(A);
//         }
//       }
//     }
//     default: {
//       return console.log(A);
//     }
//   }
// }
let A = 0;
let B = 0;
let C = 0;
let D = 0;

const ChoiceBtn = ({ number }) => {
  const navigate = useNavigate();
  function navigateClick() {
    navigate("/mbti-test/result", { state: { mbti: "enfp" } });
  }

  const TextBtntop = useMemo(() => BtnText(number), [number]);
  const TextBtnbottom = useMemo(() => BtnText2(number), [number]);
  //   const Mbtidcd = useMemo(() => click(number), [number]);
  const [alpha, setAlpha] = useState(null);
  setTimeout(() => setAlpha(number));

  function click(btnid) {
    const btnids = btnid.target.id;

    setTimeout(() => setAlpha(number));

    if (btnids == "topbtn") {
      switch (alpha) {
        case 1: {
          A += 1;
          break;
        }
        case 2: {
          A += 1;
          break;
        }
        case 3: {
          B += 1;
          break;
        }
        case 4: {
          C += 1;
          break;
        }
        case 5: {
          D += 1;
          break;
        }
        case 6: {
          B += 1;
          break;
        }
        case 7: {
          C += 1;
          break;
        }
        case 8: {
          B += 1;
          break;
        }
        case 9: {
          D += 1;
          break;
        }
        case 10: {
          A += 1;
          break;
        }
        case 11: {
          C += 1;
          break;
        }
        case 12: {
          D += 1;
          navigateClick();
          console.log("A = ", A);
          console.log("B = ", B);
          console.log("C = ", C);
          console.log("D = ", D);
          break;
        }
        default: {
          return null;
        }
      }
    } else if (btnids == "bottombtn") {
      switch (alpha) {
        case 1: {
          A -= 1;
          console.log("hi1");
          break;
        }
        case 2: {
          A -= 1;
          console.log("hi2");
          break;
        }
        case 3: {
          B -= 1;
          console.log("hi3");
          break;
        }
        case 4: {
          C -= 1;
          break;
        }
        case 5: {
          D -= 1;
          break;
        }
        case 6: {
          B -= 1;
          break;
        }
        case 7: {
          C -= 1;
          break;
        }
        case 8: {
          B -= 1;
          break;
        }
        case 9: {
          D -= 1;
          break;
        }
        case 10: {
          A -= 1;
          break;
        }
        case 11: {
          C -= 1;
          break;
        }
        case 12: {
          D -= 1;
          navigateClick();
          console.log("A = ", A);
          console.log("B = ", B);
          console.log("C = ", C);
          console.log("D = ", D);
          break;
        }
        default: {
          return null;
        }
      }
    }
  }

  return (
    <>
      <S.ChoiceBtn
        onClick={click}
        id="topbtn"
        value="topbtn"
        fontcolor="#ffffff"
        btncolor="#6578a7"
        bordercolor="#6578a7"
      >
        {TextBtntop}
        {alpha}
      </S.ChoiceBtn>
      <S.ChoiceBtn
        onClick={click}
        id="bottombtn"
        value="bottombtn"
        fontcolor="#000000"
        btncolor="#ffffff"
        bordercolor="#c4c4c4"
      >
        {TextBtnbottom}
      </S.ChoiceBtn>
    </>
  );
};

export default ChoiceBtn;

// function click(btnid) {
//     const btnids = btnid.target.id;

//     if (btnids == "topbtn") {
//       A = A + 1;
//       console.log(A);
//     } else if (btnids == "bottombtn") {
//       A -= 1;
//       console.log(A);
//     }
//   }