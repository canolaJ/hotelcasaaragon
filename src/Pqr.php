<?php 

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	require '../libPhp/Exception.php';
	require '../libPhp/PHPMailer.php';
	require '../libPhp/SMTP.php';



	if ($_SERVER["REQUEST_METHOD"] == "POST"){
		$name = $_POST["name__contact"];
		if($name){
			$name = $_POST["name__contact"];
			$email = $_POST["email__contact"];
			$phone = $_POST["phone__contact"];
			$description = $_POST["description__contact"];

			$name__validate = validateName($name);
			$email__validate = validateEmail($email);
			$phone__validate = validatePhone($phone);
			$description__validate = validateDescription($description);

			// var_dump($name__validate);<--ver variables en pantalla
			if($name__validate && $email__validate && $phone__validate && $description__validate){

				sendEmail($name, $email, $phone, $description);
			}
			else{
				echo "Error";
			}

		}

	}


	function validateName($value){

		$expresion = "/[A-Za-záéíóúÁÉÍÓÚ]{6,15}$/";
		$res = preg_match($expresion, $value);
		return $res ? true : false;
	}

	function validateEmail($value){
		$expresion ="/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i";
		$res = preg_match($expresion, $value);
		return $res ? true : false;
	}

	function validatePhone($value){
		$expresion ="/^[0-9]{10,}$/";
		$res = preg_match($expresion, $value);
		return $res ? true : false;
	}

	function validateDescription($value){

		$expresion ="/[A-Za-z áéíóúÁÉÍÓÚ0-9.,;\s]{0,30}$/";
		$res = preg_match($expresion, $value);
		return $res ? true : false;
	}


	function sendEmail($name, $email, $phone, $description){
		$mail = new PHPMailer(true);

		try {
			//Server settings
			$mail->SMTPDebug = 0;                      // Enable verbose debug output
			$mail->isSMTP();                                            // Send using SMTP
			$mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
			$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
			$mail->Username   = 'nuevareservacasaaragon@gmail.com';                     // SMTP username
			$mail->Password   = 'jorge23@?A';                               // SMTP password
			$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
			$mail->Port       = 587;                                    // TCP port to connect to

			//Recipients
			$mail->setFrom('nuevareservacasaaragon@gmail.com', 'PQR');
			$mail->addAddress('reservas@hotelcasaaragon.com' , 'reservas@hotelcasaaragon.com');
			$mail->addAddress('fakerth21@gmail.com' , 'reservas@hotelcasaaragon.com');

			$mail->isHTML(true);
			$mail->CharSet = "utf-8";                                // Set email format to HTML
			$mail->Subject = 'para: '.$name;

			$mail->Body    = '
				<html>
					<body>
						<div style="
							display: flex;
							align-items: center;
							justify-content: center;
						">
							<div style="
								width:280px;
								height: 360px;
								border-radius: 10px;
								border: 2px solid rgb(226, 153, 0);
								background:#202020;
								box-shadow: 2px 2px 10px #137081;
								padding-top: 20px;
								padding-bottom: 10px;
								padding-left: 20px;
								padding-right: 20px;"
								
							>
								<div style="text-align:center; background: rgb(226, 153, 0);border-radius: 10px;">
									<h1 style="color:rgb(0, 0, 0); text-align:center;">PQR</h1>
								</div>
								<div>
									<span style="
									display: flex;
									align-items: center;
									justify-content: left;"
									>
										<h4 style="color:rgb(226, 153, 0);">
											<b>Cliente : </b>
										</h4>
										<h4 style="color:#F2F2F2;margin-left: 10px;"> '.$name.'</h4>
									</span>
					
									<span style="
									display: flex;
									align-items: center;
									justify-content: left;"
									>
										<h4 style="color:rgb(226, 153, 0);">
											<b>Correo Electrónico : </b>
										</h4>
										<h4 style="color:#F2F2F2;margin-left: 10px;"> '.$email.'</h4>
									</span>
					
									<span style="
									display: flex;
									align-items: center;
									justify-content: left;"
									>
										<h4 style="color:rgb(226, 153, 0);">
											<b>Teléfono : </b>
										</h4>
										<h4 style="color:#F2F2F2;margin-left: 10px;"> '.$phone.'</h4>
									</span>

									<span style="
									display: flex;
									align-items: center;
									justify-content: left;"
									>
										<h4 style="color:rgb(226, 153, 0);">
											<b>Descripción : </b>
										</h4>
										<h4 style="color:#F2F2F2;margin-left: 10px;"> '.$description.'</h4>
									</span>
								</div>
							</div>
						</div>
					</body>
				</html>
			';

			// $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

			$mail->send();
			// echo 'el mensaje se envio correctamente';
		} catch (Exception $e) {
			// echo "hubo un error al enviar el correo: {$mail->ErrorInfo}";
			echo "hubo un error al enviar el correo";
		}
		header("Location:../index.html");
	}






 ?>

