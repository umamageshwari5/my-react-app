import React, { useEffect, useState } from "react";

function CustomHook(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data), setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

export default CustomHook;
