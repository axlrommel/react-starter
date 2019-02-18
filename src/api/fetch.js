const fetchJSON = async (url, opts) => {
  try {
    const response = await fetch(url, opts);
    if (!response.ok) {
      throw new Error(`fetch failed: ${response.status}`);
    }
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};