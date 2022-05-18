interface Size {
  mobile: string;
}

const size: Size = {
  mobile: "600px",
};

const device: Size = {
  mobile: `(max-width: ${size.mobile})`,
};

export default device;
