import { useFBX } from '@react-three/drei';

export default function BlackTesla({ ...props }) {
  const fbx = useFBX('/blacktesla/BlackTesla1.fbx');
  const cloned = fbx.clone();
  return (
    <mesh>
      <primitive {...props} object={cloned} dispose={null} />
    </mesh>
  );
}
