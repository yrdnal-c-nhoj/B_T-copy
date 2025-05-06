import CurrentDate from "./CurrentDate";

function LHeader() {
    return (

        <div>
            <div className="Lmotto">
                PLUS⬩ARS⬩CITIUS⬩OMNI⬩TEMPORE⬩NAM⬩QUISQUE*
            </div>
            <div className="Lheader">
                <div className="Lchltitle">
                    Cubist Heart Laboratories
                </div>
                <div className="Ldate">
                    <CurrentDate />
                </div>
            </div>
            <div className="Lbttitle">
                BorrowedTime</div>
            <div className="Lbt_newclockeveryday">
                a new clock every day
            </div>

        </div>


    );
}
export default LHeader;

