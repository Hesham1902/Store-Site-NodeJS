const apiKey =
  "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1RReE5UZ3hMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuQ1c3Uk5JVGFTZGw5RThHb3dNSmFuMzFLWjBYM3FCYm42Y29wSU5sUENtLVJLdlNCRW1obWNJMUlPWEEzc0JtTHhoS3Bua21pOUkyVmJUa25UdWdVZXc=";

fetch("https://accept.paymob.com/api/auth/tokens", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    api_key: apiKey,
  }),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const authToken = data.token;
  })
  .catch((err) => {
    console.log(err);
  });

const token =
  "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1RReE5UZ3hMQ0p3YUdGemFDSTZJalEwTURnellqVm1OMk14TW1FME0yUXdOV00xTlRsbE9XRTVOREZrWW1GaFpESTVPRFpoT1RjeU1ETTFNell6TUdZME1qVmtNVEU0WkdKak9XRmlNek1pTENKbGVIQWlPakUzTURBMk1ETXlOREI5LmNOY25MVzBVOGt1QjNNVjA5elhudnhQakFfWVIySHZoaXBxN0doR3dpamNhZWUxNkp3VjZ6VTJxQ0ZzZ2NOZWZmb3JJYVoySTFVQXFlUmxLenk2VXFB";
