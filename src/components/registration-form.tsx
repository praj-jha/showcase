import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

interface RegistrationFormProps {
	isOpen: boolean;
	onClose: () => void;
	selectedPass: {
		name: string;
		price: string;
	};
	allPasses: Array<{
		name: string;
		price: string;
	}>;
}

export function RegistrationForm({ isOpen, onClose, selectedPass, allPasses }: RegistrationFormProps) {
	const [formData, setFormData] = useState({
		passCategory: selectedPass.name,
		firstName: '',
		lastName: '',
		email: '',
		countryCode: '+91',
		phoneNumber: '',
		organizationName: '',
		designation: '',
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Payment gateway integration will go here
		console.log('Form submitted:', formData);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
					/>

					{/* Modal */}
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 20 }}
							transition={{ duration: 0.2 }}
							className="relative w-full max-w-2xl my-8"
						>
							<div className="relative rounded-3xl border border-primary/20 bg-background/95 backdrop-blur-xl shadow-2xl">
								{/* Close Button */}
								<button
									onClick={onClose}
									className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
								>
									<X className="h-5 w-5" />
								</button>

								{/* Form Header */}
								<div className="border-b border-border/50 p-8 pb-6">
									<h2 className="michroma-heading text-3xl font-light tracking-tight">
										Registration <span className="font-medium text-primary">Form</span>
									</h2>
									<p className="mt-2 text-sm font-light text-muted-foreground">
										Fill in your details to proceed with registration
									</p>
								</div>

								{/* Form Content */}
								<form onSubmit={handleSubmit} className="p-8">
									<div className="space-y-6">
										{/* Pass Category */}
										<div>
											<label className="mb-2 block text-sm font-medium text-foreground">
												Pass Category <span className="text-primary">*</span>
											</label>
											<select
												name="passCategory"
												value={formData.passCategory}
												onChange={handleChange}
												required
												className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
											>
												{allPasses.map((pass) => (
													<option key={pass.name} value={pass.name}>
														{pass.name} - {pass.price}
													</option>
												))}
											</select>
										</div>

										{/* First Name & Last Name */}
										<div className="grid gap-6 md:grid-cols-2">
											<div>
												<label className="mb-2 block text-sm font-medium text-foreground">
													First Name <span className="text-primary">*</span>
												</label>
												<input
													type="text"
													name="firstName"
													value={formData.firstName}
													onChange={handleChange}
													required
													placeholder="Enter your first name"
													className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
												/>
											</div>
											<div>
												<label className="mb-2 block text-sm font-medium text-foreground">
													Last Name <span className="text-primary">*</span>
												</label>
												<input
													type="text"
													name="lastName"
													value={formData.lastName}
													onChange={handleChange}
													required
													placeholder="Enter your last name"
													className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
												/>
											</div>
										</div>

										{/* Email */}
										<div>
											<label className="mb-2 block text-sm font-medium text-foreground">
												Email Address <span className="text-primary">*</span>
											</label>
											<input
												type="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												required
												placeholder="your.email@example.com"
												className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
											/>
										</div>

										{/* Phone Number with Country Code */}
										<div>
											<label className="mb-2 block text-sm font-medium text-foreground">
												Phone Number <span className="text-primary">*</span>
											</label>
											<div className="flex gap-3">
												<select
													name="countryCode"
													value={formData.countryCode}
													onChange={handleChange}
													required
													className="w-32 rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
												>
													<option value="+91">+91 (IN)</option>
													<option value="+1">+1 (US)</option>
													<option value="+44">+44 (UK)</option>
													<option value="+61">+61 (AU)</option>
													<option value="+971">+971 (AE)</option>
													<option value="+65">+65 (SG)</option>
													<option value="+81">+81 (JP)</option>
													<option value="+86">+86 (CN)</option>
													<option value="+33">+33 (FR)</option>
													<option value="+49">+49 (DE)</option>
												</select>
												<input
													type="tel"
													name="phoneNumber"
													value={formData.phoneNumber}
													onChange={handleChange}
													required
													placeholder="Enter your phone number"
													className="flex-1 rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
												/>
											</div>
										</div>

										{/* Organization Name */}
										<div>
											<label className="mb-2 block text-sm font-medium text-foreground">
												Organization Name <span className="text-primary">*</span>
											</label>
											<input
												type="text"
												name="organizationName"
												value={formData.organizationName}
												onChange={handleChange}
												required
												placeholder="Enter your organization name"
												className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
											/>
										</div>

										{/* Designation */}
										<div>
											<label className="mb-2 block text-sm font-medium text-foreground">
												Designation <span className="text-primary">*</span>
											</label>
											<input
												type="text"
												name="designation"
												value={formData.designation}
												onChange={handleChange}
												required
												placeholder="Enter your designation"
												className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
											/>
										</div>
									</div>

									{/* Form Actions */}
									<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
										<button
											type="button"
											onClick={onClose}
											className="rounded-xl border border-border bg-card/50 px-8 py-3 text-sm font-medium text-foreground transition-all hover:bg-card"
										>
											Cancel
										</button>
										<button
											type="submit"
											className="rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 px-8 py-3 text-sm font-medium text-white transition-all hover:from-purple-600 hover:to-purple-700"
										>
											Proceed to Payment
										</button>
									</div>
								</form>
							</div>
						</motion.div>
					</div>
				</>
			)}
		</AnimatePresence>
	);
}

