import styled from 'styled-components';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { colors } from '../../styles/styleVariables';
import { Modal } from 'antd';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
export const Table = styled(DataTable)`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 90%;
  min-height: 70%;
`;
export const TableColumn = styled(Column)`
  display: flex;
  background-color: ${colors.blue.background};
`;
export const ProfilePic = styled.img`
  border-radius: 50%;
`;
export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: ${colors.blue.background};
    padding: 1rem;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
    padding: 6;
    margin: 0;
    border-radius: none;
  }
`;
export const Inputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
  width: 50%;
`;
