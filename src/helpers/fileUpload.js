export const fileupload = async (file) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dkjujr3gj/image/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal')
    formData.append('file', file);
    try {
        const resp = await fetch(cloudUrl, {
            method: "POST",
            body: formData
        });
        if (resp.ok) {
            const cloudRes = await resp.json();
            return cloudRes.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }

}