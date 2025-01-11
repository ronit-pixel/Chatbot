import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const [extend, setextend] = useState(false);
  const { OnSent, previous, setrecentnprompt } = useContext(Context);
  return (
    <div>
      <div className="sidebar">
        <div className="top">
          <img
            src="images/menu-line.png"
            alt=""
            className="menu"
            onClick={() => setextend((prev) => !prev)}
          />
          <div className="newchat">
            <img src="images/add-line.png" alt="" />
            {extend ? <p>New Chat</p> : null}
          </div>
          {extend ? (
            <div className="recent">
              <p>Recent</p>
              {previous.map((item, index) => (
                <div className="recent-entry" onClick={()=>load(item)} key={index}>
                  <img src="images/chat-2-line.png" alt="" />
                  <p>{item}...</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="down">
          <div className="item recent-entry">
            <img src="images\question-line.png" alt="" />
            {extend ? <p>Help</p> : null}
          </div>
          <div className="item  recent-entry">
            <img src="images\chat-history-line.png" alt="" />
            {extend ? <p>Activity</p> : null}
          </div>
          <div className="item  recent-entry">
            <img src="images\settings-2-line.png" alt="" />
            {extend ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
