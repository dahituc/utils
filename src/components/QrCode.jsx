import {  useState } from "react"
import * as QR from 'qrcode'
import {saveAs} from 'file-saver'

function QrCode() {
    const [qrText, setQrText] = useState('');
    const [generatedQR, setGeneratedQR] = useState(null);

    const generateQR = (e) => {
        e.preventDefault();

        QR.toDataURL(qrText, {  version: 5, type: 'image/png', rendererOpts: {quality: 0.8} }, function (err, string) {
            if (err) {
              alert(err.message || "Failed to generate image");
              return;
            }
        
            setGeneratedQR(string);
        
          });
    }

    const updateQrInput = (e) => {
        const newValue = e.target.value;  
        setQrText(newValue, "qr.png");
    }

    const saveQR = () => {
        // saveAs()
    }

    


  return (
    <div id="__qr">
        <h2>Generate QR Code</h2>
        <form onSubmit={generateQR}>
            <input type="url" placeholder="URL" required value={qrText} onChange={updateQrInput}/>
            <input type="submit" value="Generate" />
            <div id="qrpreview">
                {generatedQR && (
                    <>
                    
                    <img src={generatedQR} style={{maxWidth: '75%'}} alt="qr preview"/>
                    {/* <button onClick={saveQR}>Save QR</button> */}
                    </>
                )}
            </div>
        </form>
    </div>
  )
}

export default QrCode