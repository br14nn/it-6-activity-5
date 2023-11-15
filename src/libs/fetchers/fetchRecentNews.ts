export default async function () {
  try {
    const res = await fetch("http://localhost:3000/api/get-recent-news", {
      method: "GET",
      next: {
        revalidate: 3000,
      },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    return { data: null, ok: false };
  }
}