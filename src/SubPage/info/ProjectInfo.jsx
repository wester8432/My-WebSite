import project1 from "../../assets/project-1.jpg";
import project2 from "../../assets/project-2.jpg";
const ProjectInfo = () => {
  return (
    <>
      <div>
        <p>
          在前公司負責的”國立教育廣播電台”，因為還沒上站，所以使用舊官網的示意圖來說明我在新官網中使用的技術。
        </p>
        <p className=" font-bold">播放器及播放清單:</p>
        <img src={project1} className="p-4" />
        在新網頁中，使用react-player來製作播放器，並以context作為播放清單的傳送(由於專案執行的選擇，使用的是context來製作全域的資料傳遞)，判斷陣列中是否有包含該節目，來決定是要加入播放清單還是移除。
        <br />
        <br />
        在舊官網中，播放清單中的項目點放後，就會被清除，我覺得很不合理，所以在新官網中，我把播放清單的刪改，全由使用者決定，在播放器播放完後，我會去判斷該節目使否在播放清單內，如果有就播放下一個排序的項目，如果沒有，就播放第一個待播的項目，如果播放的項目是待播的最後一項，停止播放。
      </div>
      <div className="mt-4">
        <p className=" font-bold">第三方會員驗證:</p>
        <img src={project2} className=" mx-auto p-4" />
        <p>
          在製作第三方驗證主要是API的串接，在用戶點擊登入、註冊後，把使用者導到驗證oauth登入的網址，並在登入後把回傳的token放到瀏覽器中，比較特別的是APPLE的登入，因為apple需要驗證client端的state及apple端的state，一個是在點擊登入跳轉頁中產生，一個是在登入後產生，要將client端的state放置在localstorage中，在登入完後續比對apple的state，去觸發apple
          oauth的驗證。
        </p>
      </div>
    </>
  );
};

export default ProjectInfo;
