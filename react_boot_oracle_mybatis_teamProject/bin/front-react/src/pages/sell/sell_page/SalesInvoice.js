
import SalesInoviceIMG from '../../../resource/sell_image/거래명세서.png'

const SalesInvoice = () => {

    return(
        <div>
            <div>
            거래명세서
                <table border="1">
                    <tr>
                        <td> (업체명) </td>
                    </tr>
                </table>
            </div>
                <table border="1">
                    <tr>
                        <td> 사업자등록번호 </td>
                        <td> (번호) </td>
                        <td> 성명 </td>
                        <td> (성명) </td>
                    </tr>
                    <tr>
                        <td> 상호 </td>
                        <td> (상호) </td>
                    </tr>
                    <tr>
                        <td> 주소 </td>
                        <td> (주소) </td>
                    </tr>
                </table>
            <div>


            </div>
            <div>
            <img src={SalesInoviceIMG} style={{ width:800 }}/>
            </div>
        </div>
    );
};

export default SalesInvoice;