import { getWasmMetadata } from '@gear-js/api';
// import { Buffer } from 'buffer';
// window.Buffer = Buffer;
// import contract from '../assets/nft.meta.wasm';

export const fetchWasm = async () => {
  try {
    // const wasm = await import('../assets/nft.meta.wasm');
    // const Buffer = await import('buffer');
    const wasm = await (await fetch('assets/nft.meta.wasm')).arrayBuffer();
    // const buffer = await wasm.arrayBuffef();
    const meta = await getWasmMetadata(Buffer.from(wasm));

    // const code = fs.readFileSync('demo_ping.opt.wasm');
    // const gas = await gearApi.program.gasSpent.init(
    //   '0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d', // source id
    //   code,
    //   '0x00',
    // );
    // console.log(gas.toHuman());
    console.log(meta);
  } catch (error) {
    console.log(error);
  }
};
