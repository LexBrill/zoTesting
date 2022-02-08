import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { ZoTesting } from '../target/types/zo_testing';

describe('zoTesting', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.ZoTesting as Program<ZoTesting>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
