import { useEffect, useState } from 'react';
import { useDeleteTools, useGetAITools } from '../../services/managerService';
import { ModalStyle, ProfilePic, Table, TableColumn } from './Styles';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { CloseOutlined } from '@ant-design/icons';
import { colors } from '../../styles/styleVariables';
import ModalDeleteUser from '../../Components/features/Modals/ModalDeleteUser/ModalDeleteUser';

export default function Home() {
  const [tools, setTools] = useState({});
  console.log('✌️tools --->', tools);
  const [toolsID, setToolsID] = useState('');
  const columns = [
    { field: 'imageURL', header: 'Foto' },
    { field: 'name', header: 'Name' },
    { field: 'description', header: 'Descrisção' },
  ];
  const [modalDelete, setModalDelete] = useState(false);
  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);
  const modalCloseButton = <CloseOutlined style={{ color: colors.white }} />;
  async function GettingTools() {
    const res = await useGetAITools({});
    const formattedTools = res[0].map((tools) => ({
      imageURL: (
        <ProfilePic
          src={tools.imageURL}
          alt={tools.name}
          style={{ width: '50px', height: '50px' }}
        />
      ),
      name: tools.name,
      description: tools.description,
      manage: (
        <RiDeleteBin5Line
          style={{ cursor: 'pointer' }}
          onClick={() => {
            openModalDelete();
            setToolsID(tools?._id);
          }}
        />
      ),
    }));

    setTools(formattedTools);
  }

  useEffect(() => {
    GettingTools();
  }, []);

  const handleUserDelete = (_id) => {
    DeletingUsers(_id);
  };
  const DeletingUsers = async (_id) => {
    try {
      await useDeleteTools(_id);
      GettingTools();
    } catch (error) {
      console.log(' error', error);
    }
  };
  return (
    <div>
      <Table value={tools[0]} paginator rows={10} removableSort>
        {columns.map((data) => (
          <TableColumn
            sortable
            key={data.field}
            field={data.field}
            header={data.header}
          />
        ))}
      </Table>
      <ModalStyle
        open={modalDelete}
        onCancel={closeModalDelete}
        width={500}
        height={250}
        padding={0}
        footer={null}
        closeIcon={modalCloseButton}
        centered
        destroyOnClose
      >
        <ModalDeleteUser
          close={closeModalDelete}
          handleUserDelete={handleUserDelete}
          id={toolsID}
        />
      </ModalStyle>
    </div>
  );
}
