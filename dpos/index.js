import * as utils from '../utils';

export async function getCandidate(accountName) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    method: 'dpos_candidate',
    params: [accountName],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getCandidates(bDetailInfo) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    method: 'dpos_candidates',
    params: [bDetailInfo],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getDposInfo() {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    method: 'dpos_info',
    params: [],
    id: 1 });
  return utils.postToNode({
      data: dataToSrv,
    });
}

export async function getDposIrreversibleInfo() {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    method: 'dpos_irreversible',
    params: [],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getValidateCandidates() {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    method: 'dpos_validCandidates',
    params: [],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getValidCandidatesByHeight(blockNum) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    method: 'dpos_validCandidatesByHeight',
    params: [blockNum],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getAvailableStake(accountName) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    method: 'dpos_availableStake',
    params: [accountName],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getVotersByCandidate(candidateName, bDetailInfo) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    method: 'dpos_votersByCandidate',
    params: [candidateName, bDetailInfo],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getVotersByCandidateByHeight(blockHeight, candidateName, bDetailInfo) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    method: 'dpos_votersByCandidateByHeight',
    params: [blockHeight, candidateName, bDetailInfo],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getVotersByVoter(candidateName, bDetailInfo) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    method: 'dpos_votersByVoter',
    params: [candidateName, bDetailInfo],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getVotersByVoterByHeight(blockHeight, candidateName, bDetailInfo) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    method: 'dpos_votersByVoterByHeight',
    params: [blockHeight, candidateName, bDetailInfo],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}


export default { getCandidate, getCandidates, getDposInfo, getDposIrreversibleInfo, 
  getValidateCandidates, getValidCandidatesByHeight, getAvailableStake, getVotersByCandidate,
  getVotersByCandidateByHeight, getVotersByVoter, getVotersByVoterByHeight };