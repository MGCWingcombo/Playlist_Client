interface size {
  mobile: string;
}

const size: size = {
  mobile: "600px",
};

const device: size = {
  mobile: `(max-width: ${size.mobile})`,
};

export default device;
