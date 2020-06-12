
<!DOCTYPE html>
<html>
<head>
</head>
<body>

			    <?php
			    	$no = 1; 
			    	foreach($data_mahasiswa as $hasil){ 
			    ?>
			      
			      <tr>
			      	<td><?php echo $no++ ?></td>
			        <td><?php echo $hasil->nim ?></td>
			        <td><?php echo $hasil->nama ?></td>
			        <td><?php echo $hasil->kelas ?></td>
			        <td><?php echo $hasil->keterangan ?></td>
	     	      </tr>

			    <?php } ?>

			    </tbody>
			  </table>
		</div>

	</div>
<!-- Tes -->
<script src="<?php echo base_url('sources/models/datamahasiswa.js')?>"></script>

</body>
</html>