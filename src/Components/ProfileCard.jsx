import profile from "../assets/profile.jpg"

export default function ProfileCard() {
  return (
    <div className="wrapper">
      <div className="card">

        <div className="avatar">
          <img src={profile} />
        </div>

        <h2>Keshav Sharma</h2>

        <div className="actions">
          <a href="mailto:keshav@example.com" className="btn email">Email</a>
          <a href="tel:9034647651" className="btn call">Call</a>
          <a href="https://linkedin.com" target="_blank" className="btn linkedin">LinkedIn</a>
        </div>

      </div>

      <style>{`
        .wrapper{
          position:fixed;
          inset:0;
          display:flex;
          justify-content:center;
          align-items:center;
          z-index:2;
        }

        .card{
          width:320px;
          padding:50px 30px 40px;
          background:#111;
          border-radius:28px;
          text-align:center;
          box-shadow:0 0 80px rgba(255,80,80,0.6);
        }

        .avatar{
          width:120px;
          height:120px;
          margin:-80px auto 15px;
          border-radius:50%;
          padding:5px;
          background:linear-gradient(45deg,#ff4b4b,#ff8b8b);
          box-shadow:0 0 25px rgba(255,80,80,0.8);
        }

        .avatar img{
          width:100%;
          height:100%;
          border-radius:50%;
          object-fit:cover;
        }

        h2{
          margin-top:10px;
          font-size:22px;
        }

        p{
          color:#aaa;
          font-size:14px;
          margin-bottom:25px;
        }

        .actions{
          display:flex;
          justify-content:center;
          gap:12px;
          flex-wrap:wrap;
        }

        .btn{
          padding:12px 22px;
          border-radius:14px;
          text-decoration:none;
          font-size:13px;
          color:white;
          background:#1a1a1a;
          border:1px solid #333;
          transition:0.35s;
          position:relative;
          overflow:hidden;
        }

        .btn::before{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(45deg,#ff4b4b,#ff8b8b);
          opacity:0;
          transition:0.4s;
          z-index:-1;
        }

        .btn:hover::before{
          opacity:1;
        }

        .btn:hover{
          transform:translateY(-5px) scale(1.05);
          box-shadow:0 10px 30px rgba(255,80,80,0.7);
          border-color:transparent;
        }

      `}</style>
    </div>
  )
}
